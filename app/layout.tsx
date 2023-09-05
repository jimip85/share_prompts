import "@styles/globals.css";

import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

interface RootLayoutProps {
  children: React.ReactNode;
  session: any; 
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, session }) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
