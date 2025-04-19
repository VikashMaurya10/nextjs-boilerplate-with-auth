import { Footer, Header } from '..';

export const PageLayout = ({ children }) => {
  //-------------- State & Variables --------------//

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};
