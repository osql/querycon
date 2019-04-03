import React from 'react'

import Nav from '../Nav'
import RegisterButton from '../buttons/RegisterButton'
import TextLogo from '../TextLogo'

import styles from './header.module.scss'

const Header = props => (
  <div className={styles.header}>
    <TextLogo dark={props.dark} />

    <div className={styles.navigation}>
      <Nav dark={props.dark} />

      {/* TODO: enable when registration is ready */}
      <RegisterButton className={styles.registerButton} disabled/>
    </div>
  </div>
)

export default Header
