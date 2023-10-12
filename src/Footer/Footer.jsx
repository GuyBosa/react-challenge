import  styles from './Footer.module.css';

function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start" className={`${styles.footer}`}>
                <div class="container p-4 pb-0">
                    <div class="row m-0" className={`${styles.contactus}`}>
                        <div class="col-md-2" className={`${styles.underline}`}></div>
                        <div class="col-md-6 m-0 p-0" className={`${styles.subtext}`}>
                            <div class="p-0 m-0">Contact us</div>
                        </div>
                    </div>
                    <div class="row m-0 p-0">
                        <div class="col">
                            <h2>Have a project in mind?<br/>
                                Let's make it happen
                            </h2>
                        </div>

                        <div class="col p-4 pt-0 m-0 text-end" >
                            <address>
                                22 Street Name, Suburb, 8000<br/>
                                Cape Town, South Africa<br/>
                                <a href="tel:021-431-0111">+27 21 431 0111</a><br/>
                                <a href="mailto:webmaster@example.com">enquire@website.co.za</a>
                            </address>
                        </div>
                    </div>
                    <section>
                        <div class="row">
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <p>
                            <a class="text-white">Terms of service</a>
                            </p>
                            <p>
                            <a class="text-white">Privacy policy</a>
                            </p>
                            <p>
                            <a class="text-white">Impressum</a>
                            </p>
                        </div>

                        <hr class="w-100 clearfix d-md-none" />

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <p>
                            <a class="text-white">Facebook</a>
                            </p>
                            <p>
                            <a class="text-white">Instagram</a>
                            </p>
                            <p>
                            <a class="text-white">Twitter</a>
                            </p>
                        </div>

                        <hr class="w-100 clearfix d-md-none" />

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            {/* <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6> */}
                            <p>
                            <a class="text-white">Github</a>
                            </p>
                            <p>
                            <a class="text-white">LinkedIn</a>
                            </p>
                            <p>
                            <a class="text-white">Teams</a>
                            </p>
                        </div>

                        <hr class="w-100 clearfix d-md-none" />

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <p>
                            <a class="text-white">Youtube</a>
                            </p>
                            <p>
                            <a class="text-white">Behance</a>
                            </p>
                            <p>
                            <a class="text-white">Dribbble</a>
                            </p>
                        </div>

                        <hr class="w-100 clearfix d-md-none" />

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <p>
                            <a class="text-white">Explore open jobs</a>
                            </p>
                            <p>
                            <a class="text-white"></a>
                            </p>
                            <p>
                            <a class="text-white">© 2000 - 2023 <br/> Company name:</a>
                            </p>
                        </div>
                        </div>
                    </section>

                    {/* <hr class="my-3"> */}

                </div>
            </footer>
        </div>
    )
}

export default Footer;