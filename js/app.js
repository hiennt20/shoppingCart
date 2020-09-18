const PRODUCTS = [
  {
    id: 10,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 20,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [isShowModal, setShowModal] = React.useState(false);
  const [deleteProduct, setDeleteProduct] = React.useState({});
  const [currency, setCurrency] = React.useState(PRODUCTS);

  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = subTotal * taxPercent;

  function addProduct(products) {
    // Tạo 1 mảng mới giống hệt mảng cũ
    const newProducts = [...products];

    // Thêm phần tử vào mảng mới
    newProducts.push({
      id: 3,
      name: "Laptop DELL 3",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 12.99,
      quantity: 11,
    });

    // Cập nhật state
    setProducts(newProducts);


  }

  // xac nhan xoa

  function confirmDelete(product) {
    setShowModal(true);
    // setShowModal((value) => !value);
    setDeleteProduct(product);
    console.log(product);
  }

  //TODO: Xóa sản phẩm
  function removeProduct() {
    // alert("Remove Product " + productId);
    // thêm thông báo
    // let thongBao = confirm("ban chac la xoa chu?");
    // if(thongBao){
    //   const newProducts = products.filter((product) => product.id !== productId);
    // setProducts(newProducts);
    // }
    const newProducts = products.filter(
      (product) => product.id !== deleteProduct.id
    );
    setProducts(newProducts);
    setShowModal(false);
  }

  // dinh dang tien te
  // function currencyFomat(number) {
  //   new Intl.NumberFormat("ja-JP", {
  //     style: "currency",
  //     currency: "JPY",
  //   }).format(number);
  // }

  return (
    <main>
      <CartHeader
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody
        products={products}
        removeProduct={removeProduct}
        confirmDelete={confirmDelete}
        
      />

      <CartFooter subTotal={subTotal} tax={tax} products={products} />
      <CartModal
        isVisible={isShowModal}
        handleOk={removeProduct}
        handleCancel={() => setShowModal(false)}
      />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
