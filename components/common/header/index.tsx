import HeaderAction from "./headerAction";
import Image from "next/image";

const Header = () => {
  const navigation = {
    menu: [
      {
        name: "Test1",
        items: [
          {
            name: "Test1-1",
            items: [
              {
                name: "Test1-1-1",
                href: "/test1-1-1",
              },
              {
                name: "Test1-1-2",
                href: "/test1-1-2",
              },
              {
                name: "Test1-1-3",
                href: "/test1-1-3",
              },
              {
                name: "Test1-1-4",
                href: "/test1-1-4",
              },
              {
                name: "Test1-1-5",
                href: "/test1-1-5",
              },
              {
                name: "Test1-1-6",
                href: "/test1-1-6",
              },
              {
                name: "Test1-1-7",
                href: "/test1-1-7",
              },
              {
                name: "Test1-1-8",
                href: "/test1-1-8",
              },
              {
                name: "Test1-1-9",
                href: "/test1-1-9",
              },
              {
                name: "Test1-1-10",
                href: "/test1-1-10",
              },
            ],
          },
          {
            name: "Test1-2",
            items: [
              {
                name: "Test1-2-1",
                href: "/test1-2-1",
              },
            ],
          },
          {
            name: "Test1-3",
            href: "/test1-3",
            items: [
              {
                name: "Test1-3-1",
                href: "/test1-3-1",
              },
            ],
          },
          {
            name: "Test1-4",
            href: "/test1-4",
            items: [
              {
                name: "Test1-4-1",
                href: "/test1-4-1",
              },
            ],
          },
        ],
        images: [
          "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
          "https://static.minhtuanmobile.com/uploads/editer/2025-03/06/images/lich-chieu-thanh-guom-diet-quy-vo-han-thanh-tai-viet-nam-1.webp",
        ],
      },
      {
        name: "Test2",
        items: [
          {
            name: "Test2-1",
            href: "/test2-1",
            items: [
              {
                name: "Test2-1-1",
                href: "/test2-1-1",
              },
            ],
          },
        ],
        images: [
          "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
        ],
      },
    ],
    quickLinks: [
      {
        name: "Test1-4-1",
        href: "/test1-4-1",
      },
      {
        name: "Test1-4-2",
        href: "/test1-4-2",
      },
      {
        name: "Test1-4-3",
        href: "/test1-4-3",
      },
    ],
  };
  return <HeaderAction navigation={navigation} />;
};

export default Header;
