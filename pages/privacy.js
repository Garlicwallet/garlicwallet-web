import Layout from '../components/layout'
import Head from 'next/head'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Privacy() {
    var projectName = 'Garlicwallet';
    return (
        <>
            <Layout>
                <Head>
                    <title>Garlicwallet - Privacy Policy</title>
                </Head>
                <Container>
                        <h1>Privacy Policy</h1>
                    <p>Your privacy is critically important to us. We have a few fundamental principles:</p>
                    <ul>
                        <li>We don't ask you for personal information unless we truly need it. (We can't stand services that ask you for things like your gender or income level for no apparent reason.)</li>
                        <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
                        <li>We don't store personal information on our servers.</li>
                    </ul>
                    <h3>Website Visitors and App Users</h3>
                    <p>
                    Like most websites and applications, {projectName} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference,
                    referring site, and the date and time of each visitor request. {projectName}'s purpose in collecting non-personally identifying information is to better understand how {projectName}'s visitors use its website and
                    applications. From time to time, {projectName} may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website and applications.
                    </p>
                    <h3>Aggregated Statistics</h3>
                    <p>
                    {projectName} may collect statistics about the behavior of visitors to its websites and applications.
                    {projectName} may display this information publicly or provide it to others. However, {projectName} does
                    not disclose personally-identifying information other than as described below.
                    </p>
                    <h3>Protection of Certain Personally-Identifying Information</h3>
                    <p>
                    {projectName} discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated
                    organizations that (i) need to know that information in order to process it on {projectName}'s behalf or to provide services available at {projectName}'s websites
                    and applications, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside
                    of your home country; by using {projectName}'s websites or applications, you consent to the transfer of such information to them. {projectName} will not rent or
                    sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations,
                    as described above, {projectName} discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order
                    or other governmental request, or when {projectName} believes in good faith that disclosure is reasonably necessary to protect the property or rights of {projectName},
                    third parties or the public at large. If you are a registered user of a {projectName} website and have supplied your email address, {projectName} may
                    occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with {projectName} and our
                    products. We primarily use our various product blogs to communicate this type of information, so we expect to keep this type of email to a minimum. If you send
                    us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to
                    your request or to help us support other users. {projectName} takes all measures reasonably necessary to protect against the unauthorized access, use, alteration
                    or destruction of potentially personally-identifying and personally-identifying information.
                    </p>
                    <h3>Cookies</h3>
                    <p>
                    A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor
                    returns. {projectName} uses cookies to help {projectName} identify and track visitors, their usage of {projectName} website, and their website access preferences. {projectName}
                    visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using {projectName}'s websites, with the drawback
                    that certain features of {projectName}'s websites may not function properly without the aid of cookies.
                    </p>
                    <h3>Business Transfers</h3>
                    <p>
                    If {projectName}, or substantially all of its assets, were acquired, or in the unlikely event that {projectName} goes out of business or enters bankruptcy, user information
                    would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of {projectName}
                    may continue to use your personal information as set forth in this policy.
                    </p>
                    <h3>Payments</h3>
                    <p>
                    Digital goods found in the application are sold via Google Play Services and Google Wallet.
                    You can find the privacy policy for both of those services at
                    a(href='https://www.google.com/policies/privacy/') https://www.google.com/policies/privacy/
                    </p>
                    <h3>Ads</h3>
                    <p>
                    Ads appearing on any of our websites or applications may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server
                    to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows
                    ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by
                    {projectName} and does not cover the use of cookies by any advertisers. App ads are provided by Mopub, who have provided a Privacy Policy here:
                    a(href='http://www.mopub.com/legal/privacy/') http://www.mopub.com/legal/privacy/
                    </p>
                    <h3>Privacy Policy Changes</h3>
                    <p>
                    Although most changes are likely to be minor, {projectName} may change its Privacy Policy from time to time, and in {projectName}'s sole discretion. {projectName}
                    encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site or any of our products after any change in this
                    Privacy Policy will constitute your acceptance of such change.
                    </p>
                </Container>
            </Layout>
        </>
    )
}