
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"






export function NavBar() {
    return (<>

        <div className="flex w-full justify-center gap-4 p-4">

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link1</NavigationMenuLink>
                            <NavigationMenuLink>Link2</NavigationMenuLink>
                            <NavigationMenuLink>Link3</NavigationMenuLink>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link 2</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link 3</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>

    </>
    );
}