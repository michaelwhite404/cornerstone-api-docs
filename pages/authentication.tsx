import { NextPage } from "next";
import Code from "../components/Code";
import { H1, H3 } from "../components/headings";

const Authentication: NextPage = () => {
  return (
    <div>
      <H1>Authentication</H1>
      <p>
        In order to access the API, you will need to provide an access token to authenticate with
        the API server. That token will be required for all API requests. You can acquire that token
        by issuing a personal API key that grants your application full access to your personal
        account.
      </p>
      <p>
        Once you have acquired the API token, it may be provided preferably via an HTTP header or in
        a query string parameter.
      </p>
      <H3>HTTP Header</H3>
      <p>The following header should be used:</p>
      <Code>Authorization: Bearer &lt;token&gt;</Code>
    </div>
  );
};

export default Authentication;
