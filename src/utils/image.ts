import fu1 from '@assets/fu/fu_1.png';
import fu2 from '@assets/fu/fu_2.png';
import fu3 from '@assets/fu/fu_3.png';
import fu4 from '@assets/fu/fu_4.png';
import fu5 from '@assets/fu/fu_5.png';
import fu1p from '@assets/fu/fu_1_p.png';
import fu2p from '@assets/fu/fu_2_p.png';
import fu3p from '@assets/fu/fu_3_p.png';
import fu4p from '@assets/fu/fu_4_p.png';
import fu5p from '@assets/fu/fu_5_p.png';

import sg1 from '@assets/sg/sg_1.png';
import sg2 from '@assets/sg/sg_2.png';
import sg3 from '@assets/sg/sg_3.png';
import sg4 from '@assets/sg/sg_4.png';
import sg5 from '@assets/sg/sg_5.png';
import sg1p from '@assets/sg/sg_1_p.png';
import sg2p from '@assets/sg/sg_2_p.png';
import sg3p from '@assets/sg/sg_3_p.png';
import sg4p from '@assets/sg/sg_4_p.png';
import sg5p from '@assets/sg/sg_5_p.png';

const clothesImageMap: {
	[key: string]: string;
} = {
	fu_1: fu1,
	fu_2: fu2,
	fu_3: fu3,
	fu_4: fu4,
	fu_5: fu5,
	fu_1_p: fu1p,
	fu_2_p: fu2p,
	fu_3_p: fu3p,
	fu_4_p: fu4p,
	fu_5_p: fu5p,
	sg_1: sg1,
	sg_2: sg2,
	sg_3: sg3,
	sg_4: sg4,
	sg_5: sg5,
	sg_1_p: sg1p,
	sg_2_p: sg2p,
	sg_3_p: sg3p,
	sg_4_p: sg4p,
	sg_5_p: sg5p,
};

export const getClothesImage = (key: string): string => {
	try {
		return clothesImageMap[key];
	} catch {
		return '';
	}
};
