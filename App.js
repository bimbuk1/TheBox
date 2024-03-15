import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomePage = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex bg-blue-700 px-16 py-8 rounded-md mb-4 items-center`}>
        <Text style={tw`text-white text-lg font-bold mb-2`}>Хүргэлтийн захиалга</Text>
        <TouchableOpacity style={tw`bg-white rounded-lg px-4 py-2`}>
          <Text style={tw`text-lg font-bold`}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`text-xl font-bold mb-2`}>Захиалгын жагсаалт</Text>
      <View style={tw`flex items-center mb-4`}>
        <TouchableOpacity style={tw`bg-blue-600 p-2 rounded-md w-full mb-1 text-white `}><Text>Бүгд</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-100 p-2 rounded-md w-full mb-1`}><Text>Хүргэгдсэн</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-100 p-2 rounded-md w-full mb-1`}><Text>Хүлээгдэж буй</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-100 p-2 rounded-md w-full mb-1`}><Text>Цуцлагдсан</Text></TouchableOpacity>
      </View>
      <Image source={require('./assets/nvvr.png')} style={tw`w-48 h-48`} />
    </View>
  );
};

export default HomePage;
