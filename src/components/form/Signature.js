import React, { useState } from "react";
import SignaturePad from "react-signature-canvas";

function Signature({ signature }) {
  let sigPad;

  const clear = () => sigPad.clear();
  const trim = (e) => {
    e.preventDefault();

    signature({
      trimmedDataURL: sigPad.getCanvas().toDataURL("image/png"),
    });
  };

  return (
    <>
      <SignaturePad
        penColor="black"
        canvasProps={{ className: "sigCanvas" }}
        ref={(ref) => {
          sigPad = ref;
        }}
      />
      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={trim}>Trim</button>
      </div>
    </>
  );
}

export default Signature;

// state = {trimmedDataURL: null}
// sigPad = {}
// clear = () => {
//   this.sigPad.clear()
// }
// trim = () => {
//   this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
//     .toDataURL('image/png')})
// }
// render () {
//   let {trimmedDataURL} = this.state
//   return <div className={styles.container}>
//     <div className={styles.sigContainer}>
//       <SignaturePad canvasProps={{className: styles.sigPad}}
//         ref={(ref) => { this.sigPad = ref }} />
//     </div>
//     <div>
//       <button className={styles.buttons} onClick={this.clear}>
//         Clear
//       </button>
//       <button className={styles.buttons} onClick={this.trim}>
//         Trim
//       </button>
//     </div>
//     {trimmedDataURL
//       ? <img className={styles.sigImage}
//         src={trimmedDataURL} />
//       : null}
//   </div>
