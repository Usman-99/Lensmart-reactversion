import map from "../Images/map.jpg"

export default function Contact() {
    return (
        <div className="w3-container w3-light-grey"  id="contact">
            <h3 className="w3-center w3-xlarge"><b>CONTACT US</b></h3>
            <div>
                <p className="mt-5 mb-2"><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Karachi, Pakistan</p>
                <p className="mb-2"><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +92 33151515</p>
                <a href="mailto:usmancis99@gmail.com" className="text-decoration-none text-black"><p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right text-black"> </i> Email: lensmart@gmail.com</p></a>
                <img src={map} className="w3-image w3-greyscale" style={{ width: '100%', marginTop: '48px' }} alt="map"/>
            </div>
        </div>
    )
}
