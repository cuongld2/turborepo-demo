import {debug, Bubble} from 'components';
import React from 'react';

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

const page = () => <div>
    <div>
        {debug} <Bubble/>
        <Bubble color={'#0000FF'} size={400} />
    </div>
</div>;
export default page;