const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <div className="text-center container mx-auto py-4">
          <h1 className="text-4xl">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
          <div className="border my-4 "></div>
        </div>
        <footer className="flex justify-around container mx-auto py-4">
          <div className="flex flex-col gap-3">
            <h6 className="font-bold ">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-bold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
