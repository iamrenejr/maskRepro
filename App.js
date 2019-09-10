import React from 'react';
import { Modal } from 'react-native';
import Svg, {
	Circle,
  Rect,
  Defs,
  Mask,
} from 'react-native-svg';

const App = () => {
  return (
		<React.Fragment>
			<Svg height="100%" width="100%">
				<Rect
					width="100%"
					height="100%"
					fill="yellow"
				/>
			</Svg>
			<Modal visible transparent>
			 <Svg height="100%" width="100%">
				 <Defs>
					 <Mask id="Mask">
						 <Rect
							 x="0"
							 y="0"
							 width="100%"
							 height="100%"
							 fill="white"
						 />
						 <Circle
							 cx="250"
							 cy="250"
							 r="50"
							 fill="black"
						 />
					 </Mask>
				 </Defs>
				 <Rect
					 x="0"
					 y="0"
					 width="100%"
					 height="100%"
					 fill="#555"
					 fillOpacity="0.8"
					 mask="id(#Mask)"
					 stroke="blue"
					 strokeWidth={16}
				 />
			 </Svg>
		 </Modal>
	 </React.Fragment>
  );
};

export default App;
