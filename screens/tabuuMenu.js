import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Platform, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';;
import { supabase } from '../utils/supabase';

const translations = {
  tr: {
    title: 'Tabu',
    startGame: 'Oyuna Başla',
    rules: 'Kılavuz',
    settings: 'Ayarlar',
    scores: 'Skorlar',
    logout: 'Çıkış Yap',
  },
    en: {
    title: 'Tabo',
    startGame: 'Start Game',
    rules: 'Guide',
    settings: 'Settings',
    scores: 'Scores',
    logout: 'Logout',
  },
};

export default function TabuuMenu() {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  const loadLanguage = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('tabuuSettings');
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setCurrentLanguage(parsed.language ?? 'tr');
      }
    } catch (error) {
      console.log('Ayarlar yüklenemedi:', error);
    }
  };

  useEffect(() => {
    const loadAssetsAndSettings = async () => {
      setFontLoaded(true);
      await loadLanguage();
    };
    loadAssetsAndSettings();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadLanguage();
    }, [])
  );

  if (!fontLoaded) {
    return null; // Font yüklenene kadar hiçbir şey gösterme
  }

  const t = translations[currentLanguage];

  const OutlinedTitle = ({ text }) => (
    <View style={styles.titleWrapper}>
      <Text style={[styles.titleBase, styles.titleOutline, { left: -2, top: 0 }]}>{text}</Text>
      <Text style={[styles.titleBase, styles.titleOutline, { left: 2, top: 0 }]}>{text}</Text>
      <Text style={[styles.titleBase, styles.titleOutline, { left: 0, top: -2 }]}>{text}</Text>
      <Text style={[styles.titleBase, styles.titleOutline, { left: 0, top: 2 }]}>{text}</Text>
      <Text style={[styles.titleBase, styles.titleFill]}>{text}</Text>
    </View>
  );

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert('Çıkış Hatası', error.message);
      } else {
        // Supabase signOut başarılı, App.js'deki onAuthStateChange otomatik yönlendirecek.
        // İsteğe bağlı olarak AsyncStorage.clear() çağırılabilir, ancak Supabase oturumuyla doğrudan ilgili değil.
        // await AsyncStorage.clear(); 
      }
    } catch (error) {
      console.error('Çıkış yaparken hata oluştu:', error);
      Alert.alert('Hata', 'Çıkış yapılırken bir sorun oluştu.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Başlık ve İkonlar */}
        <View style={styles.header}>
          <OutlinedTitle text={t.title} />
        </View>

        {/* Menü Butonları */}
        <TouchableOpacity style={[styles.menuButton, styles.btnBlue]} onPress={() => { navigation.navigate('NewGame'); }} activeOpacity={0.85}>
          <Ionicons name="game-controller" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{t.startGame}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.btnGreen]} onPress={() => { navigation.navigate('Scores'); }} activeOpacity={0.85}>
          <Ionicons name="trophy" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{t.scores}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.btnCyan]} onPress={() => { navigation.navigate('MyWords'); }} activeOpacity={0.85}>
          <Ionicons name="create" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{currentLanguage === 'tr' ? 'Kendi Kartların' : 'My Cards'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.btnOrange]} onPress={() => { navigation.navigate('Settings'); }} activeOpacity={0.85}>
          <Ionicons name="settings" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{t.settings}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.btnPurple]} onPress={() => { navigation.navigate('Help'); }} activeOpacity={0.85}>
          <Ionicons name="help-circle" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{t.rules}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.btnRed]} onPress={handleLogout} activeOpacity={0.85}>
          <Ionicons name="log-out" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.menuButtonText}>{t.logout}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2', // Mavi tonu
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    position: 'relative',
  },
  titleWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  titleBase: {
    fontSize: Platform.OS === 'android' ? 60 : 70,
    letterSpacing: 2,
    position: 'absolute',
    textTransform: 'uppercase',
  },
  titleFill: {
    color: '#2b2b2b',
    position: 'relative',
  },
  titleOutline: {
    color: '#2b2b2b',
  },
  button: {
    width: 260,
    paddingVertical: 18,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#2b2b2b',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  orange: {
    backgroundColor: '#f47c20',
  },
  blue: {
    backgroundColor: '#4A6FA5',
  },
  buttonText: {
    fontFamily: 'IndieFlower',
    fontSize: 26,
    color: '#fff',
    letterSpacing: 1,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8B4513',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  menuButtonText: { color: '#fff', fontFamily: 'IndieFlower', fontSize: Platform.OS === 'android' ? 21 : 22 },
  btnBlue: { backgroundColor: '#4A6FA5' },
  btnOrange: { backgroundColor: '#f47c20' },
  btnGreen: { backgroundColor: '#66BB6A' },
  btnPurple: { backgroundColor: '#9C27B0' },
  btnCyan: { backgroundColor: '#5b9bd5' },
  btnYellow: { backgroundColor: '#FFD700' }, // Yeni renk
  btnRed: { backgroundColor: '#EF5350' }, // Çıkış butonu için yeni renk
  bookIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

