/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Link from '../components/Link'
import {
  faMeteor,
  faGraduationCap,
  faAnchor,
} from '@fortawesome/free-solid-svg-icons'
import { calculateAge } from '../utils'

export const TITLE = 'Oke Schwien'

export const ABOUT_HEADLINE = 'Moin'

export const ABOUT_TEXT = (
  <>
    <p>
      <Link url='https://en.wikipedia.org/wiki/Moin'>
        <i>Moin</i> [mɔɪ̯n]
      </Link>{' '}
      is how you say <i>hello</i> in northern Germany, where I was born and
      raised.
    </p>
    <p>
      My name is Oke, I am {calculateAge(new Date('1991-01-11'))} years old,
      currently living and working in the amazing city{' '}
      <Link url='https://en.wikipedia.org/wiki/Hamburg' icon={faAnchor}>
        Hamburg
      </Link>
      {''}, Germany.
    </p>
    <p>
      I am a software guy with a special interest in web frontend technologies,
      UX and product development.
    </p>
    <p>
      Alongside software engineering I love to spin some Techno records behind
      the decks, together with my{' '}
      <Link url='https://basiskollektiv.de/' icon={faMeteor}>
        Basis Kollektiv
      </Link>{' '}
      crew.
    </p>
  </>
)

export const CV_HEADLINE = 'Curriculum Vitae'

export const CV_PERSONAL_INFORMATION = {
  label: 'Personal Information',
  items: [
    { key: 'Full Name', value: 'Niels-Oke Schwien' },
    { key: 'Date of Birth', value: '1991-01-11' },
    {
      key: 'Languages',
      value: (
        <>
          German (native)
          <br />
          English (proficient)
        </>
      ),
    },
  ],
}

export const CV_CAREER = {
  label: 'Career',
  items: [
    {
      key: 'Since 03/2019',
      value: (
        <>
          Software Engineer,{' '}
          <Link url='https://www.finanzcheck.de/'>Finanzcheck</Link>
        </>
      ),
    },
    {
      key: '08/2015-12/2018',
      value: (
        <>
          Software Developer,{' '}
          <Link url='http://www.dlr.de/dlr/en'>
            {'German Aerospace Center'}
          </Link>
        </>
      ),
    },
    {
      key: '08/2007-07/2010',
      value: 'Apprenticeship: IT Management Assistant',
    },
  ],
}

export const CV_UNIVERSITY = {
  label: 'University',
  items: [
    {
      key: '03/2017-09/2019',
      value: (
        <>
          Computer Science M.Sc.,{' '}
          <Link
            url='http://www.hs-bremen.de/internet/en/'
            icon={faGraduationCap}
          >
            Hochschule Bremen
          </Link>
        </>
      ),
    },
    {
      key: '08/2015-01/2016',
      value: (
        <>
          Thematic semester of Agile Project Management and Mobile Application
          Development,{' '}
          <Link url='http://www.amsterdamuas.com/' icon={faGraduationCap}>
            Hogeschool van Amsterdam
          </Link>
        </>
      ),
    },
    {
      key: '09/2013-03/2017',
      value: (
        <>
          Media Computer Science B.Sc.,{' '}
          <Link
            url='http://www.hs-bremen.de/internet/en/'
            icon={faGraduationCap}
          >
            Hochschule Bremen
          </Link>
        </>
      ),
    },
  ],
}

export const WORK_HEADLINE = 'Projects'

export const WORK_ITEMS = {
  label: 'Some special projects I could recently contribute to (selection):',
  items: [
    {
      key: 'Basis Kollektiv',
      value: (
        <>
          {' '}
          Since 2018 I am a proud member of{' '}
          <Link url='https://basiskollektiv.de/' icon={faMeteor}>
            Basis Kollektiv
          </Link>{' '}
          crew: a bunch of lovely people enjoying electronic music and
          organizing parties a few well-chosen times a year.
        </>
      ),
    },
    {
      key: 'EDEN ISS Monitor',
      value: (
        <>
          A web app to follow the present and past results of the{' '}
          <Link url='https://eden-monitor.de/'>EDEN ISS</Link> project: a
          greenhouse in Antartica with the goal to advance controlled
          environmental agriculture technologies.
        </>
      ),
    },
    {
      key: 'openvocs',
      value:
        'An open source voice communication system introducing state-of-the-art communication technologies to mission control centers.',
    },
  ],
}
