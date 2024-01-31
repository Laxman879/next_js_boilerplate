import { useRouter } from "next/router";

function ProductIdPage() {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div>
      <center>
        <h2>Product Id Details {productId}</h2>
      </center>
    </div>
  );
}

export default ProductIdPage;
