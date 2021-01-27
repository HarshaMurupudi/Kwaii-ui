import React from 'react';

import SmipleyToggle from '../../components/smiley-toggle/smiley-toggle.component';

interface PropsType {
  isDrawerOpen: boolean
}

const smileyPage = ({ isDrawerOpen }: PropsType) => (
  <div><SmipleyToggle /></div>
)

export default smileyPage;