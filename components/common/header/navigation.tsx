import { TNavigation } from "./type";

type Props = {
  navigation: TNavigation;
};
const Navigation = ({ navigation }: Props) => {
  return (
    <div className="navigation flex items-center justify-center  px-8">
      {navigation.menu.map((item) => (
        <div className="navigation-item px-5 pt-[8px]" key={item.name}>
          <h1 className="navigation-item-name">{item.name}</h1>
          <div className="navigation-item-submenu flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="navigation-item-submenu-content flex-1">
                {item.items?.map((subItem) => (
                  <div
                    className="navigation-item-submenu-item flex flex-col gap-2"
                    key={subItem.name}
                  >
                    <a
                      href={subItem.href}
                      className="hover:underline font-semibold text-sm uppercase"
                    >
                      {subItem.name}
                    </a>
                    {subItem?.items?.map((subItem123) => (
                      <a
                        key={subItem123.name}
                        className="hover:underline text-sm uppercase"
                      >
                        {subItem123.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="navigation-item-submenu-images">
                {item.images?.map((image) => (
                  <img src={image} alt={item.name} key={image} />
                ))}
              </div>
            </div>
            <div className="navigation-item-submenu-quick-links ">
              {navigation.quickLinks?.map((quickLink) => (
                <a
                  href={quickLink.href}
                  className="hover:underline text-sm uppercase font-semibold px-1"
                  key={quickLink.name}
                >
                  {quickLink.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
