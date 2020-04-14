import * as React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link
} from "@material-ui/core";
import { QuestionAnswer, Share, CloudDownload } from "@material-ui/icons";
import packageJson from "../../package.json";

type Props = {|
  onItemClick: (item: { id: string, title: string }) => void
|};

export default class Menu extends React.Component<Props> {
  onButtonClick(item: { id: string, title: string }) {
    const { onItemClick } = this.props;

    onItemClick(item);
  }

  render() {
    return (
      <React.Fragment>
        <List>
          <ListItem
            button
            key="faq"
            onClick={this.onButtonClick.bind(this, {
              id: "faq",
              title: "Questions / Réponses"
            })}
          >
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
          <ListItem
            button
            key="attest"
            onClick={this.onButtonClick.bind(this, {
              id: "attest",
              title: "Télécharger une attestation"
            })}
          >
            <ListItemIcon>
              <CloudDownload />
            </ListItemIcon>
            <ListItemText primary="Attestations" />
          </ListItem>
          <ListItem
            button
            key="share"
            onClick={this.onButtonClick.bind(this, {
              id: "share",
              title: "Partager"
            })}
          >
            <ListItemIcon>
              <Share />
            </ListItemIcon>
            <ListItemText primary="Partager" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="version">
            <ListItemText>
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
              >
                {`Version ${packageJson.version} par XB`}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem key="credits">
            <ListItemText>
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
              >
                <Link href="https://www.esrifrance.fr/" target="_blank">
                  Carte réalisée par Esri France
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
