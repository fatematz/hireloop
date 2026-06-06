
import {LayoutSideContent, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
  const navItems = [
    {icon: House, href: "/dashboard/recruiter" , label: "Home"},
    {icon: Magnifier, href: "/dashboard/recruiter/jobs" , label: "jobs"},
    {icon: Bell, href: "/dashboard/recruiter/jobs/new" , label: "new"},
    {icon: Envelope, href: "/dashboard/recruiter/mycompany" , label: "My Company"},
    {icon: Person, href: "/dashboard/recruiter/company" , label: "Add Company Details"},
    {icon: Gear, href: "/" , label: "Settings"},
  ];

  const navContent =     <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                     href={item.href}
                  >
                    <item.icon className="size-5 text-muted" />
                   {item.label}
                  </Link>
                ))}
              </nav>

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
         {navContent}
      </aside>
      <Drawer>
      <Button variant="secondary" className="lg:hidden">
        <LayoutSideContent />
        Sidebar
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
          {navContent}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>

    </>
  
  );
}