import './fonts.css'
import './reset.css'

import React, { Component } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import SectionSwitcher from '../components/section-switcher'
import ComputerDesktop from '../components/computer-desktop'
import Amplifier from '../components/amplifier'
import Header from '../components/header'
import MeAtWork from '../components/me-at-work'
import VerticalText from '../components/vertical-text'
import Sections from '../sections'

const Content = styled.div`
  height: calc(100% - 100px);
  width: 100%;
`

const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding: 30px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 100px 100px 1fr 250px;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 25px;
  align-items: center;
  justify-items: center;

  > *:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  > *:nth-child(2) {
    position: relative;
    overflow: hidden;
    grid-column: 3 / 4;
    grid-row: 1;
  }

  > *:nth-child(3) {
    grid-column: 4;
    grid-row: 1 / 3;
    align-self: start;
  }
`

class IndexPage extends Component {
  state = {
    hovered: null,
    activeSection: '',
  }

  setNextSection = nextSection => {
    const { activeSection } = this.state

    if (activeSection !== nextSection) {
      this.setState({ activeSection: '' }, () => {
        setTimeout(() => this.setState({ activeSection: nextSection }))
      })
    }
  }

  render() {
    const { activeSection } = this.state

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 300 }}>
        {springStyles => {
          return (
            <Layout style={springStyles}>
              <Header />
              <Content>
                <Sections section={activeSection} />
              </Content>
              <Flex>
                <SectionSwitcher
                  onClick={() => this.setNextSection('work')}
                  isActive={activeSection === 'work'}
                >
                  {({ isHovered }) => (
                    <>
                      <MeAtWork
                        isAnimating={isHovered || activeSection === 'work'}
                      />
                      <VerticalText size={25} text="Work" />
                    </>
                  )}
                </SectionSwitcher>
                <SectionSwitcher
                  onClick={() => this.setNextSection('code')}
                  isActive={activeSection === 'code'}
                >
                  {({ isHovered }) => (
                    <>
                      <ComputerDesktop
                        isAnimating={isHovered || activeSection === 'code'}
                      />
                      <VerticalText size={25} text="Code" />
                    </>
                  )}
                </SectionSwitcher>
                <SectionSwitcher
                  onClick={() => this.setNextSection('music')}
                  isActive={activeSection === 'music'}
                >
                  {({ isHovered }) => (
                    <>
                      <Amplifier
                        isAnimating={isHovered || activeSection === 'music'}
                      />
                      <VerticalText size={25} text="Music" />
                    </>
                  )}
                </SectionSwitcher>
              </Flex>
            </Layout>
          )
        }}
      </Spring>
    )
  }
}

export default IndexPage
