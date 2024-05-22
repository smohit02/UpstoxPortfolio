import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';;

const SummaryBottomSheet = ({
    summaryData,
    portfolioDataResponseStatus
}) => {

    const [index, setIndex] = useState(0)
    const indexRef = useRef()
    indexRef.current = index

    const bottomSheetRef = useRef(null);
    const initialSnapPoints = useMemo(() => [70, 185], []);

    useEffect(() => {
        if (portfolioDataResponseStatus === 'PENDING')
            bottomSheetRef.current.snapToIndex(0)
    }, [portfolioDataResponseStatus])

    const handleOnBottomSheetIndicatorPress = () => {
        if (indexRef.current === 0) {
            bottomSheetRef.current.snapToIndex(1)
        }
        else {
            bottomSheetRef.current.snapToIndex(0)
        }
    }

    const Row = ({ label, value, extraStyles }) => {
        return (
            <View style={{ ...styles.summaryRow, ...extraStyles }}>
                <Text style={{ ...styles.summaryText, fontWeight: 'bold' }}>{label}</Text>
                <Text style={styles.summaryText}>₹ {value}</Text>
            </View >
        )
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={initialSnapPoints}
            index={0}
            style={styles.bottomSheet}
            handleIndicatorStyle={styles.indicatorStyle}
            onChange={(i) => { setIndex(i) }}
        >
            <BottomSheetView
                style={styles.summaryContainer}>
                <TouchableWithoutFeedback
                    hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
                    onPress={handleOnBottomSheetIndicatorPress}
                    style={styles.customIndicator}
                >
                    <View style={index === 0 ? styles.upArrow : styles.downArrow}></View>
                </TouchableWithoutFeedback>
                {indexRef.current !== 0 ?
                    <>
                        <Row
                            value={summaryData.currentValueTotal.toFixed(2)}
                            label={'Current Value'}
                        />
                        <Row
                            value={summaryData.totalInvestment.toFixed(2)}
                            label={'Total Investment'}
                        />
                        <Row
                            value={summaryData.todaysPNL.toFixed(2)}
                            label={'Today\'s Profit & Loss'}
                        />
                        <Row
                            value={summaryData.totalPNL.toFixed(2)}
                            label={'Profit & Loss'}
                            extraStyles={{ marginTop: 15 }}
                        />
                    </>
                    :
                    <>
                        <Row
                            value={summaryData.totalPNL.toFixed(2)}
                            label={'Profit & Loss'}
                        />
                    </>}


            </BottomSheetView>
        </BottomSheet>
    )
}

export default SummaryBottomSheet