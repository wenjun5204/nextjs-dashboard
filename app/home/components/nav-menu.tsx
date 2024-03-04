import {
  RocketIcon,
  HamburgerMenuIcon,
  AccessibilityIcon,
  EnvelopeOpenIcon,
  Pencil2Icon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import { tag } from '@/app/constant';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

export function Menu() {
  // function Bookmark({slug}) {
  //   return <button
  //       formAction={
  //           async ()=>{
  //               "use server"
  //               await sql`INSERT INTO Bookmark (slug) VALUES (${slug});`
  //           }
  //       }
  //   >插入</button>;
// }



  // 参数化查询
  // const name ='john';
  
  // const greet = (string: TemplateStringsArray, name: string)=>{
  //   console.log(7776, string)
  //   return `hello, ${name}`
  // };

  // const greeting =greet`first ss second ${name}`;

  // console.log(7776, greeting);
  return (
    <Menubar className="h-full w-auto">
      <MenubarMenu>
        <MenubarTrigger>
          <HamburgerMenuIcon className="mr-3" />
          <span className="hidden md:block">分类</span>
        </MenubarTrigger>
        <MenubarContent>
          {tag.map((it, ind) => (
            <MenubarItem key={ind}>
              {it} <MenubarShortcut>⌘{ind}</MenubarShortcut>
            </MenubarItem>
          ))}
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <RocketIcon className="mr-3" />
          <span className="hidden md:block">话题</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <RocketIcon className="mr-3" />
          <span className="hidden md:block">生活</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <AccessibilityIcon className="mr-3" />
          <span className="hidden md:block">茶馆</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <Link href={'/home/topic'}>
            <MenubarItem inset>留言</MenubarItem>
          </Link>

          <MenubarSeparator />
          <MenubarItem inset>友链</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="flex ">
          <EnvelopeOpenIcon className="mr-3" />
          <span className="hidden md:block">联系我</span>
        </MenubarTrigger>
        <MenubarContent>
          <Image
            src="/assets/wechat.jpg"
            alt="微信联系"
            width={200}
            height={200}
          />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/home">
          <MenubarTrigger className="flex ">
            <Pencil2Icon className="mr-3" />
            <span className="hidden md:block">工具</span>
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
