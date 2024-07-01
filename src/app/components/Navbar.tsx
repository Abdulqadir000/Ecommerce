"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Login successful!");
    } else if (status === "unauthenticated") {
      toast.error("Logged out!");
    }
  }, [status]);

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Qadir
            <span className="text-primary">Store</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link className="text-lg font-semibold text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
          {!session ? (
            <Button
              variant={"outline"}
              onClick={() => signIn("github")}
              className="ml-4 flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Login
              </span>
            </Button>
          ) : (
            <Button
              variant={"outline"}
              onClick={() => signOut()}
              className="ml-4 flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
            >
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Logout
              </span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}




// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import { ShoppingBag } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useShoppingCart } from "use-shopping-cart";
// import { FaGithub } from "react-icons/fa";

// const links = [
//   { name: "Home", href: "/" },
//   { name: "Men", href: "/Men" },
//   { name: "Women", href: "/Women" },
//   { name: "Teens", href: "/Teens" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const { handleCartClick } = useShoppingCart();
//   const { data: session } = useSession();

//   return (
//     <header className="mb-8 border-b">
//       <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
//         <Link href="/">
//           <h1 className="text-2xl md:text-4xl font-bold">
//             Qadir
//             <span className="text-primary">Store</span>
//           </h1>
//         </Link>
//         <nav className="hidden gap-12 lg:flex 2xl:ml-16">
//           {links.map((link, idx) => (
//             <div key={idx}>
//               {pathname === link.href ? (
//                 <Link className="text-lg font-semibold text-primary" href={link.href}>
//                   {link.name}
//                 </Link>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="flex items-center divide-x border-r sm:border-l">
//           <Button
//             variant={"outline"}
//             onClick={() => handleCartClick()}
//             className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
//           >
//             <ShoppingBag />
//             <span className="hidden text-xs font-semibold text-gray-500 sm:block">
//               Cart
//             </span>
//           </Button>
//           {!session ? (
//             <Button
//               variant={"outline"}
//               onClick={() => signIn("github")}
//               className="ml-4 flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
//             >
//               <FaGithub className="h-6 w-6" />
//               <span className="hidden text-xs font-semibold text-gray-500 sm:block">
//                 Login
//               </span>
//             </Button>
//           ) : (
//             <Button
//               variant={"outline"}
//               onClick={() => signOut()}
//               className="ml-4 flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none"
//             >
//               <span className="hidden text-xs font-semibold text-gray-500 sm:block">
//                 Logout
//               </span>
//             </Button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }







// "use client";
// import { Button } from "@/components/ui/button";
// import { ShoppingBag } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useShoppingCart } from "use-shopping-cart";

// const links = [
//     { name: "Home", href: "/" },
//     { name: "Men", href: "/Men" },
//     { name: "Women", href: "/Women" },
//     { name: "Teens", href: "/Teens" },

// ]
// export default function Navbar() {
//     const pathname = usePathname();
//     const {handleCartClick} = useShoppingCart()
//     return (
//         <header className="mb-8 border-b">
//             <div className="flex items-center justify-between mx-auto nax-w-2xl px-4 sm:px-6 lg:max-w-7xl">
//                 <Link href="/">
//                     <h1 className="text-2xl md:text-4xl font-bold">Qadir
//                         <span className="text-primary">Store</span></h1>
//                 </Link>
//                 <nav className="hidden gap-12 lg:flex 2xl:ml-16">
//                     {links.map((link, idx) => (
//                         <div key={idx}>
//                             {pathname === link.href ? (
//                                 <Link className="text-lg font-semibold text-primary" href={link.href}>
//                                     {link.name}
//                                 </Link>
//                             ):(
//                                 <Link href={link.href} 
//                                 className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
//                                 >
//                                     {link.name}
//                                 </Link>  
//                             )}
//                         </div>
//                     ))}
//                 </nav>

//                 <div className="flex divide-x border-r sm:bordewr-l">
//                     <Button
//                     variant={"outline"} 
//                     onClick={()=> handleCartClick()}
//                     className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none">
//                     <ShoppingBag/>
//                     <span className="hidden text-xs font-semibold text-gray-500 sm:block">
//                         Cart
//                     </span>
//                     </Button>
//                 </div>

//             </div>
//         </header>
//     )
// }