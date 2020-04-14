import * as React from "react";
import ReactGA from "react-ga";
import { Theme, NavigationBar, Dialog } from "../MuiComponents";
import Menu from "./Menu";
import Frame from "./Frame";
import FAQ from "./FAQ";
import Share from "./Share";
import Attestation from "./Attestation";
import { Link } from "@material-ui/core";

type State = {|
  modalOpen: boolean,
  currentItem?: { id: string, title: string }
|};

export default class App extends React.Component<Props, State> {
  UA: string;

  constructor(props) {
    super(props);

    this.UA = "UA-127796557-2";

    this.state = { modalOpen: false, currentItem: undefined };
  }

  componentDidMount() {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      window[`ga-disable-${this.UA}`] = true;
    }

    ReactGA.initialize(this.UA);
    ReactGA.pageview(window.location.pathname);
  }

  handleModalOpen(item: { id: string, title: string }) {
    this.setState({
      modalOpen: true,
      currentItem: { id: item.id, title: item.title }
    });

    ReactGA.event({ category: "user", action: "open-modal", label: item.id });
  }

  handleModalClose() {
    this.setState({ modalOpen: false, currentItem: undefined });

    ReactGA.event({ category: "user", action: "close-modal" });
  }

  renderModalContent() {
    const { currentItem } = this.state;

    if (currentItem === undefined) {
      return null;
    }

    switch (currentItem.id) {
      case "faq":
        return <FAQ />;
      case "share":
        return <Share />;
      case "attest":
        return <Attestation />;
      default:
        break;
    }
  }

  render() {
    const { modalOpen, currentItem } = this.state;

    return (
      <Theme>
        <Dialog
          title={currentItem ? currentItem.title : ""}
          open={modalOpen}
          onClose={this.handleModalClose.bind(this)}
        >
          {this.renderModalContent()}
        </Dialog>
        <NavigationBar
          title={<Link href={window.location} color="secondary" underline="none">Coronavirus en France</Link>}
          menu={<Menu onItemClick={this.handleModalOpen.bind(this)} />}
        >
          <Frame />
        </NavigationBar>
      </Theme>
    );
  }
}
