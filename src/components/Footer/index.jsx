import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-bottomBlack">
                <div className="container sm:px-4 mx-auto text-center py-10">
                    <div className="flex flex-row flex-wrap text-white content-center place-content-center">
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Address</h5>
                            <ul>
                                <li><p className="text-sm">322 Jacqueline House 52 Fitzroy Road Fitzroy Road<br />London, England, NW1 8UA<br /></p></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Phone</h5>
                            <ul>
                                <li><a className="text-sm" href="tel:+447376116343">+447376116343<br /></a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">E-mail</h5>
                            <ul>
                                <li><a href="mailto:info@metatelecom.uk">info@metatelecom.uk<br /></a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Legal</h5>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-bottomBlack-100 py-3">
                    <p className="text-white text-center">© 2023 TELECOMMUNICATIONS LTD</p>
                </div>
            </footer>
        );
    }
}
