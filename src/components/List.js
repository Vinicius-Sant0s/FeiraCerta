import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckIcon,
  Divider,
  FlatList,
  RemoveIcon,
  Text,
  View,
} from '@gluestack-ui/themed';

export default ({items}) => {
  const renderList = ({item}) => {
    return (
      <View>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          alignSelf={'flex-end'}
          alignContent={'space-around'}
          backgroundColor={item.id % 2 === 0 ? '$secondary0' : '$primary0'}>
          <Box padding={'$1'}>
            <Checkbox
              size="xs"
              value={0}
              aria-label={'check-item'}
              isChecked={item.check}>
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>
          </Box>

          <Box padding={'$1'}>
            <Text>{item.name}</Text>
          </Box>

          <Box padding={'$1'}>
            <Button size={'xs'} isDisabled={item.quant === 0}>
              <ButtonIcon as={RemoveIcon} />
            </Button>
          </Box>

          <Box padding={'$1'}>
            <Text>{item.quant}</Text>
          </Box>

          <Box padding={'$1'}>
            <Button size={'xs'}>
              <ButtonIcon as={AddIcon} />
            </Button>
          </Box>
        </Box>

        <Divider />
      </View>
    );
  };

  return (
    <FlatList keyExtractor={items.id} data={items} renderItem={renderList} />
  );
};
