import React from "react"
// import Sticky from "react-stickynode"
import { ThemeProvider } from "styled-components"
import ScrollToTop from "react-scroll-up"
// import Navbar from "./Navbar/Navbar"
import Newsletter from "./Newsletter/Newsletter"
import Footer from "./Footer/Footer"
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton"
import InstagramShowcase from "../containers/InstagramShowcase"
import ResetCss from "./resetCSS"
import { theme } from "../theme"
import { SocialLinks } from "./SocialLinks"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        {/*<Sticky top={0} innerZ={9999} activeClass="nav-sticky">*/}
        {/*  <Navbar />*/}
        {/*</Sticky>*/}

        {children}

        {process.env.INSTAGRAM_TOKEN && <InstagramShowcase />}
        {process.env.MAILCHIMP_URL && <Newsletter />}
        <Footer>
          <SocialLinks />
          <div>Copyright &copy; {new Date().getFullYear()}</div>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  )
}

export default Layout