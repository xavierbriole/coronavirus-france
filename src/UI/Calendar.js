// @flow

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import HelpIcon from '@material-ui/icons/Help'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  greenIcon: {
    color: theme.palette.success.main,
  },
  orangeIcon: {
    color: theme.palette.warning.main,
  },
  redIcon: {
    color: theme.palette.error.main,
  },
  helpIcon: {
    color: theme.palette.action.disabled,
  },
}))

export default function Calendar(): React$Element<any> {
  const classes = useStyles()

  const renderValue = (value: string) => {
    switch (value) {
      case 'green':
        return <CheckCircleIcon className={classes.greenIcon} />
      case 'orange':
        return <CheckCircleIcon className={classes.orangeIcon} />
      case 'red':
        return <CancelIcon className={classes.redIcon} />
      case '?':
        return <HelpIcon className={classes.helpIcon} />
      default:
        return <Typography className={classes.orangeIcon}>{value}</Typography>
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>19 mai</TableCell>
            <TableCell align='center'>9 juin</TableCell>
            <TableCell align='center'>30 juin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key='cinemas-theatres'>
            <TableCell component='th' scope='row'>
              Cinémas, théâtres
            </TableCell>
            <TableCell align='center'>
              {renderValue('35% (800 personnes max)')}
            </TableCell>
            <TableCell align='center'>
              {renderValue('65% (5000 personnes max)')}
            </TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='terrasses-bars'>
            <TableCell component='th' scope='row'>
              Terrasses de bars, restaurants
            </TableCell>
            <TableCell align='center'>
              {renderValue('50% (6 max/table)')}
            </TableCell>
            <TableCell align='center'>{renderValue('orange')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='salles-bars'>
            <TableCell component='th' scope='row'>
              Salles des bars, restaurants
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>
              {renderValue('50% (6 personnes max)')}
            </TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='magasins-marchés'>
            <TableCell component='th' scope='row'>
              Magasins, marchés couverts
            </TableCell>
            <TableCell align='center'>{renderValue('8m²/client')}</TableCell>
            <TableCell align='center'>{renderValue('4m²/client')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='salons-foires'>
            <TableCell component='th' scope='row'>
              Salons, foires
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('50%')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='discotheques'>
            <TableCell component='th' scope='row'>
              Discothèques
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('?')}</TableCell>
          </TableRow>
          <TableRow key='concerts-interieur-debout'>
            <TableCell component='th' scope='row'>
              Concerts en intérieur (debout)
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='festivals-exterieur-debout'>
            <TableCell component='th' scope='row'>
              Festivals en extérieur (debout)
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>
              {renderValue('4m²/festivalier')}
            </TableCell>
          </TableRow>
          <TableRow key='festivals-exterieur-assis'>
            <TableCell component='th' scope='row'>
              Festivals en extérieur (assis)
            </TableCell>
            <TableCell align='center'>
              {renderValue('35% (800 personnes max)')}
            </TableCell>
            <TableCell align='center'>
              {renderValue('65% (5000 personnes max)')}
            </TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='musees-monuments'>
            <TableCell component='th' scope='row'>
              Musées, monuments
            </TableCell>
            <TableCell align='center'>{renderValue('8m²')}</TableCell>
            <TableCell align='center'>{renderValue('4m²')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='piscines-salles'>
            <TableCell component='th' scope='row'>
              Piscines, salles de sport
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('50%')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='stades'>
            <TableCell component='th' scope='row'>
              Stades, établissements sportifs plein air
            </TableCell>
            <TableCell align='center'>
              {renderValue('35% (1000 personnes max)')}
            </TableCell>
            <TableCell align='center'>
              {renderValue('65% (5000 personnes max)')}
            </TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='sport-contact-exterieur'>
            <TableCell component='th' scope='row'>
              Sport de contact en extérieur
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('25 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='sport-exterieur'>
            <TableCell component='th' scope='row'>
              Sport sans contact en extérieur
            </TableCell>
            <TableCell align='center'>{renderValue('10 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('25 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='rassemblements-exterieurs'>
            <TableCell component='th' scope='row'>
              Rassemblements extérieurs
            </TableCell>
            <TableCell align='center'>{renderValue('10 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('10 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='croisieres-bateau'>
            <TableCell component='th' scope='row'>
              Croisières en bateau
            </TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('red')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='remontees-meca'>
            <TableCell component='th' scope='row'>
              Remontées mécaniques
            </TableCell>
            <TableCell align='center'>{renderValue('50%')}</TableCell>
            <TableCell align='center'>{renderValue('65%')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='zoos'>
            <TableCell component='th' scope='row'>
              Zoos
            </TableCell>
            <TableCell align='center'>{renderValue('50%')}</TableCell>
            <TableCell align='center'>{renderValue('65%')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='mariages-ceremonies'>
            <TableCell component='th' scope='row'>
              Mariages, cérémonies religieuses
            </TableCell>
            <TableCell align='center'>{renderValue('1 siège sur 3')}</TableCell>
            <TableCell align='center'>{renderValue('1 siège sur 2')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
          <TableRow key='ceremonies-funeraires'>
            <TableCell component='th' scope='row'>
              Cérémonies funéraires
            </TableCell>
            <TableCell align='center'>{renderValue('50 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('75 personnes')}</TableCell>
            <TableCell align='center'>{renderValue('green')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
