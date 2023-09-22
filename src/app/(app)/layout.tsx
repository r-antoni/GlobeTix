import Header from "@/components/Shared/Fragments/Header";
import BaliProvider from "@/context/BaliContext";
import JavaProvider from "@/context/JavaContext";


export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header top="Top Destination" discount="Discounted Destination" newly="Newly Added Destination" />
      <BaliProvider>
        <JavaProvider>{children}</JavaProvider>
      </BaliProvider>
    </div>
  );
}
