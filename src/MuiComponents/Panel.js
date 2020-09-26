// @flow

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

type Props = {|
  datas: Array<{
    question: string,
    answer: string,
  }>,
  onPanelOpen: (question: string) => void,
|}

export default function SimpleAccordion({
  datas,
  onPanelOpen,
}: Props): React$Element<any> {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {datas.map((data, index) => {
        return (
          <Accordion
            key={index}
            onChange={(event, expanded) => {
              if (!expanded) {
                return
              }

              onPanelOpen(data.question)
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography className={classes.heading}>
                {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
