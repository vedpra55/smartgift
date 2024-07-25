import Link from "next/link";
import React from "react";
import Container from "./Container";
import client from "../../contentful";
import Head from "next/head";

const fetchProduct = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "products",
      "fields.slug": slug,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  const id = params.slug;
  const productObj = await fetchProduct(id);
  const product = productObj?.fields;

  const u = "https:" + product?.images[0].fields.file.url;

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      images: [u],
    },
  };
}

const ProdutPage = async ({ params }) => {
  const slug = params?.slug;

  const productObj = await fetchProduct(slug);
  const product = productObj?.fields;

  if (!product) return null;

  return (
    <main>
      <Head>
        <title>{product.name} | Smart gift</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="mx-auto px-3 md:px-5 xl:px-0 max-w-screen-xl py-5">
        <Link href={"/"}>
          <img className="w-14 md:pt-5 pb-5 md:pb-10" src="/logo.jpg" />
        </Link>
        <Container product={product} />
      </div>
    </main>
  );
};

export default ProdutPage;
