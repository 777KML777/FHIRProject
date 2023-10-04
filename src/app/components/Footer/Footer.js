import "./footer.css"; 


export default function Footer() {
  return (
    <>
     <div className="footer" id="footer">
        <div className="logo_img">
            <img src="Logo.png" className="img_logo_footer" alt="MindCare"/>
        </div>
        <p className="texto-footer">© MindCare. 2023.</p>
    </div>
    </>
  );
}