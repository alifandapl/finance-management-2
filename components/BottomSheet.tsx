import Colors from "@/constants/Colors";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Space from "./Space";
import Button from "./Button";

export default function BottomSheet({
  visible,
  onRequestClose,
  children,
  title,
  primaryButton,
  secondaryButton,
}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onDismiss={onRequestClose}
      backdropColor={Colors.backdrop}
      onRequestClose={onRequestClose}
      statusBarTranslucent
    >
      <View style={styles.container}>
        {title && (
          <>
            <Text style={styles.title}>{title}</Text>
            <Space size={16} />
          </>
        )}
        {children}
        <Space size={16} />
        <View style={styles.row}>
          {secondaryButton && (
            <Button
              label={secondaryButton.label}
              variant="outline"
              onPress={secondaryButton.onPress}
              style={styles.flex}
            />
          )}
          {primaryButton && secondaryButton && <View style={styles.space} />}
          {primaryButton && (
            <Button
              label={primaryButton.label}
              onPress={primaryButton.onPress}
              disabled={primaryButton.disabled}
              style={styles.flex}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: { flexDirection: "row" },
  space: { width: 16 },
  flex: { flex: 1 },
});
