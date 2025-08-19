import "./globals.css";
import Page from "./page";
import MainContent from "./pages/main-content";

export default function Layout() {
  return (
   <html>
    <body className="bg-[url('/logoandbg.png')] bg-cover bg-center bg-no-repeat w-full h-screen">
      {/* Other components or content can go here */}
      <Page />
      <MainContent />
      {/* You can add a footer or other components here if needed */}
    </body>
   </html>
  )
}