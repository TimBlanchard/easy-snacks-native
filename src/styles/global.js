import {fontSize, letterSpacing, neutral, spacing} from "./const";
import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({

    // UTILITY CLASSES
    wrapper_full: {
        width: '100%',
        padding: spacing[5],
    },

    subtitle: {
        fontSize: fontSize[4],
        color: neutral.black,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat Medium'
    },

    text: {
        fontSize: fontSize[4],
        color: neutral.black_op_80,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat'
    },

    text_white: {
        fontSize: fontSize[4],
        color: neutral.white,
        letterSpacing: letterSpacing.neg_3,
        fontFamily: 'Moderat Medium'
    }

});
