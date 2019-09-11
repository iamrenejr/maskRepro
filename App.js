import React from 'react';
import { Modal, Dimensions } from 'react-native';
import Svg, {
	Circle,
  Rect,
  Defs,
  Mask,
	ClipPath,
	Path,
} from 'react-native-svg';

const App = () => {
	const { width, height } = Dimensions.get('window');
	const cx = 200;
	const cy = 200;
	const r = 10;
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
					 <ClipPath id="clip">
						 <Path
							 d={`
								M 0 0
								H ${width}
								V ${height}
								H -${width}
								z
								M ${cx - r} ${cy}
								a ${r} ${r} 0 1 0 ${r * 2} 0
								${r} ${r} 0 1 0 ${r * -2} 0
								z
							 `}
						 />
					 </ClipPath>
				 </Defs>
				 <Rect
					 x="0"
					 y="0"
					 width="100%"
					 height="100%"
					 fill="#555"
					 fillOpacity="0.8"
					 stroke="blue"
					 strokeWidth={16}
					 clipPath="url(#clip)"
				 />
			 </Svg>
		 </Modal>
	 </React.Fragment>
  );
};

export default App;
