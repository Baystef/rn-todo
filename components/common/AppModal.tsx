import { Modal, View, Text, Pressable, StyleSheet } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { type FC } from "react"

interface Props {
  isVisible: boolean
  modalTitle?: string
  children: React.ReactNode
  onClose: () => void
}

const AppModal: FC<Props> = ({
  isVisible,
  children,
  onClose,
  modalTitle = "Edit Todo",
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  titleContainer: {
    height: "5%",
    width: "90%",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#b7cff4",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
  },
})

export { AppModal }
