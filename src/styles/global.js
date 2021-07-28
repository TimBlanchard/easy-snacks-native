import {border_radius, color, fontSize, letterSpacing, neutral, spacing} from "./const";
import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({

    // UTILITY CLASSES
    wrapper_full: {
        width: '100%',
        padding: spacing[5],
    },
    box_default: {
      border: `1px solid ${neutral.grey}`,
        borderRadius: border_radius[3]
    },

    subtitle: {
        fontSize: fontSize[5],
        color: neutral.black,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat Medium'
    },
    subtitle_highlighted: {
        fontSize: fontSize[5],
        color: color.primary,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat Medium'
    },
    text: {
        fontSize: fontSize[5],
        color: neutral.black_op_80,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat'
    },
    text_highlighted: {
        fontSize: fontSize[5],
        color: color.primary,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat'
    },

    text_white: {
        fontSize: fontSize[5],
        color: neutral.white,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat Medium'
    },
    text_tiny: {
        fontSize: fontSize[4],
        color: neutral.black,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat'
    },
    text_big: {
        fontSize: fontSize[7],
        color: neutral.black,
        letterSpacing: letterSpacing.neg_2,
        fontFamily: 'Moderat Medium'
    },
    text_big_highlighted: {
        fontSize: fontSize[7],
        color: color.primary_op_80,
        letterSpacing: letterSpacing.neg_2,
        fontFamily: 'Moderat Bold'
    }

});
