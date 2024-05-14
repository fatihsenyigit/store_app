
import logo from "../assets/logo.png";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block ">
          <a
            href="https://google.com/"
            target="true"
            className="flex items-center"
          >
            <img src={logo} alt="clarusway" width={50} height={50} />
            <span className="text-gray-700 hover:text-gray-900 font-medium">
              Store App
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center">
            <ul>
                {navigation.map(item=>(
                    <li>

                    </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar