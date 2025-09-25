const Footer = () => {
    return (
        <footer>
            <div className='w-full xl:h-90 h-100 bg-[#4097FF] flex xl:flex-row flex-col items-center justify-center xl:space-x-30 xl:space-y-0 space-y-10'>
                <img src="/images/logo.png" alt="logo" className='xl:w-[300px] w-[200px]' />
                <div className='flex flex-col items-start justify-center text-white space-y-5'>
                    <h1 className='font-semibold text-xl'>Contactez-nous</h1>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex items-center space-x-3'>
                            <img src="/images/email.png" alt="email" className='w-7' />
                            <h1>info@bluazur.com</h1>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <img src="/images/phone-call.png" alt="phone-call" className='w-7' />
                            <h1>+1 555 555-5555</h1>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img src="/images/facebook.png" alt="facebook" className='w-7' />
                            <h1>@ BLU Azur</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-20 bg-[#2161AE] flex items-center justify-center text-white'>
                <h1 className='font-semibold text-md'>© Tous droits réservés à Blu Azur</h1>
            </div>
        </footer>
    );
};

export default Footer;