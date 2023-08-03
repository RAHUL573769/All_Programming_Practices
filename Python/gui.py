import pyautogui
from time import *

pyautogui.alert("This is an alert box.")
pyautogui.confirm("Shall I proceed?")
pyautogui.confirm("Enter option.", buttons=["A", "B", "C"])
