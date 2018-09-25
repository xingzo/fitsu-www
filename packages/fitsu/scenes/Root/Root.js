// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import styled, { ThemeProvider } from 'styled-components';
import { themeStore } from 'root/stores';
import { Route, Switch, LazyComponent } from 'root/components';
import { Flex } from 'ui-primitives';
import { Navbar, Footer } from 'pro/components';
import { ProIcon } from 'icons';
import NotFound from './NotFound'

const LazyLanding = () => <LazyComponent promise={import('fitsu/scenes/Landing')} />;

@observer
export default class Root extends React.Component<{}> {
    render() {
    //     return (
    //         // $FlowFixMe silent
    //         <ThemeProvider theme={themeStore.theme}>
    //             <StyledRoot>
    //                 <Switch>
    //                     <Route exact path="/" component={LazyLanding} />
    //                     <Route component={ProductRoutes} />
    //                 </Switch>
    //             </StyledRoot>
    //         </ThemeProvider>
    //     );
    // }
}
