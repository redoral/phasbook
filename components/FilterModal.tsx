import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Checkbox from './Checkbox';
import colors from '../styles/colors';

type FilterModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  speedFilters: Record<string, boolean>;
  setSpeedFilters: React.Dispatch<React.SetStateAction<any>>;
};

function FilterModal({ speedFilters, setSpeedFilters, isOpen, setIsOpen }: FilterModalProps) {
  function handleCheckAllSpeed() {
    setSpeedFilters({
      all: !speedFilters.all,
      fast: !speedFilters.all,
      slow: !speedFilters.all,
      normal: !speedFilters.all,
      los: !speedFilters.all
    });
  }

  return (
    <Modal style={filterModalStyles.container} isVisible={isOpen}>
      <View style={{ flex: 1 }}>
        <View style={filterModalStyles.header}>
          <View style={filterModalStyles.headingWrapper}>
            <Icon name='filter-variant' color={'#fff'} size={24} style={{ paddingRight: 12 }} />
            <Text style={filterModalStyles.headingText}>Filters</Text>
          </View>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <Icon name='close' color={'#fff'} size={24} style={{ paddingRight: 4 }} />
          </TouchableOpacity>
        </View>
        {/** SPEED */}
        <View>
          <Text style={filterModalStyles.categoryLabel}>Speed</Text>
          <Checkbox isChecked={speedFilters.all} onPress={handleCheckAllSpeed} text='All' />
          <Checkbox
            isChecked={speedFilters.normal}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, normal: !speedFilters.normal });
            }}
            text='Normal'
          />
          <Checkbox
            isChecked={speedFilters.fast}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, fast: !speedFilters.fast });
            }}
            text='Fast'
          />
          <Checkbox
            isChecked={speedFilters.slow}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, slow: !speedFilters.slow });
            }}
            text='Slow'
          />
          <Checkbox
            isChecked={speedFilters.los}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, los: !speedFilters.los });
            }}
            text='Line of Sight'
          />
        </View>

        <TouchableOpacity onPress={() => setIsOpen(false)} style={filterModalStyles.button}>
          <Text style={filterModalStyles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const filterModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 24
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headingText: { color: colors.white, fontWeight: '500', fontSize: 20 },
  categoryLabel: { color: colors.white, marginVertical: 12, fontWeight: '500', fontSize: 18 },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 14,
    marginVertical: 24
  },
  buttonText: {
    color: colors.black,
    fontWeight: '700'
  }
});

export default FilterModal;
