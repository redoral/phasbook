import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity } from 'react-native';
import filterModalStyles from './filterModalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Icon name='filter-variant' color={'#fff'} size={24} style={{ paddingRight: 12 }} />
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 20 }}>Filters</Text>
          </View>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <Icon name='close' color={'#fff'} size={24} style={{ paddingRight: 4 }} />
          </TouchableOpacity>
        </View>
        {/** SPEED */}
        <View>
          <Text style={{ color: '#fff', marginVertical: 12, fontWeight: '500', fontSize: 18 }}>
            Speed
          </Text>
          <BouncyCheckbox
            disableBuiltInState
            isChecked={speedFilters.all}
            onPress={handleCheckAllSpeed}
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='All'
          />
          <BouncyCheckbox
            disableBuiltInState
            isChecked={speedFilters.normal}
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            onPress={() => {
              setSpeedFilters({ ...speedFilters, normal: !speedFilters.normal });
            }}
            text='Normal'
          />
          <BouncyCheckbox
            disableBuiltInState
            isChecked={speedFilters.fast}
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, fast: !speedFilters.fast });
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Fast'
          />
          <BouncyCheckbox
            disableBuiltInState
            isChecked={speedFilters.slow}
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, slow: !speedFilters.slow });
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Slow'
          />
          <BouncyCheckbox
            disableBuiltInState
            isChecked={speedFilters.los}
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            onPress={() => {
              setSpeedFilters({ ...speedFilters, los: !speedFilters.los });
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='No Line of Sight'
          />
        </View>
        {/** EVIDENCE */}
        {/* <View>
          <Text style={{ color: '#fff', marginVertical: 12, fontWeight: '500', fontSize: 18 }}>
            Evidence
          </Text>
          <BouncyCheckbox
            isChecked={evidenceFilters.emf}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, emf: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='EMF Level 5'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.ultraviolet}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, ultraviolet: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Ultraviolet'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.writing}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, writing: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Ghost Writing'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.freezing}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, freezing: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Freezing'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.dots}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, dots: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='DOTS'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.orb}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, orb: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Ghost Orb'
          />
          <BouncyCheckbox
            isChecked={evidenceFilters.spiritBox}
            onPress={(isChecked: boolean) =>
              setEvidenceFilters({ ...evidenceFilters, spiritBox: isChecked })
            }
            style={{ paddingVertical: 4 }}
            innerIconStyle={{
              borderRadius: 5
            }}
            iconStyle={{
              borderRadius: 5
            }}
            textStyle={{ color: '#fff', textDecorationLine: 'none' }}
            fillColor='#404258'
            text='Spirit Box'
          />
        </View> */}
        <TouchableOpacity onPress={() => setIsOpen(false)} style={filterModalStyles.applyButton}>
          <Text style={filterModalStyles.applyButtonTitle}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default FilterModal;
