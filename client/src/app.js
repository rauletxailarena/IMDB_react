import React from "react"
import ReactDOM from "react-dom"
import CommentBox from "./components/CommentBox.jsx"
import OpeningBox from "./filmComponents/OpeningBox.jsx"

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <OpeningBox/>,
    document.getElementById("app"))
});
