function CartModal({ isVisible, handleOk, handleCancel }) {
  return isVisible ? (
    <div className="modal">
      <button>X</button>
      <p>bạn muốn xóa sản phẩm này phải không ?</p>
      <button onClick={handleOk}>ok</button>
      <button onClick={handleCancel}>cancel</button>
    </div>
  ) : null;
}

/*
function CartModal({isVisible}){
    return (
        isVisible && (<div className="modal">
        <button>X</button>
        <p>bạn muốn xóa sản phẩm này phải không ?</p>
        <button>ok</button>
        <button>cancel</button>
      </div>)
    )
}

*/
