import fu1 from '@assets/fu/fu_1.webp';
import fu2 from '@assets/fu/fu_2.webp';
import fu3 from '@assets/fu/fu_3.webp';
import fu4 from '@assets/fu/fu_4.webp';
import fu5 from '@assets/fu/fu_5.webp';

import sg1 from '@assets/sg/sg_1.webp';
import sg2 from '@assets/sg/sg_2.webp';
import sg3 from '@assets/sg/sg_3.webp';
import sg4 from '@assets/sg/sg_4.webp';
import sg5 from '@assets/sg/sg_5.webp';

const clothesImageMap: {
	[key: string]: string;
} = {
	fu_1: fu1,
	fu_2: fu2,
	fu_3: fu3,
	fu_4: fu4,
	fu_5: fu5,
	sg_1: sg1,
	sg_2: sg2,
	sg_3: sg3,
	sg_4: sg4,
	sg_5: sg5,
};

export const getClothesImage = (key: string): string => {
	try {
		return clothesImageMap[key];
	} catch {
		return '';
	}
};
