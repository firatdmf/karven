# Author: Muhammed Firat Ozturk
# Purpose of this file is to identify the counts of each variant of each product, so we can determine our stock based on each SKU.

# Utilizing the pandas package as pd 
import pandas as pd


# Reading the specific sheet of an excel file. Header is 0, which means the first row will be treated as column names, not data entries.
# We also need to specify the data types via converters object, so we do not face any problems while performing mathmatical operations. 
# PS: df stands for data frame
df = pd.read_excel('TR_hazir_perde_ceki_ve_fiyatlar.xlsx',sheet_name='edited_and_removed_excess',header=0, converters  = {'KUTU':str,'DESEN':str,"ÖLÇÜ":str,'KAP İÇİ SET ADET': int})


# Keeping the relevant columns in the dataframe
df = df[["KUTU","DESEN","ÖLÇÜ","RENK","ASMA TİPİ","KAP İÇİ SET ADET","FİYAT/ADET","FİYAT TOPLAM",]]

initial_num_rows = df.shape[0]
print(f'The file you have provided has {initial_num_rows} rows in it.')
# clean the data, initialize an array to store the indecies of the row we need to delete
rows_to_drop = []
for index, row in df.iterrows():
    # Since we have merged cells that imply the same box label, we need to manually seperate them here so our dataframe can understand what it means and which box each product belongs.
    # to do that we need to be able to go to the previous row from the current index, to check the first instance of that box label and assign to the NaN ones coming after it.
    # Because when pandas sees a merged cell, it treates the top of the merged cell to be the value, and the coming rows after the merged cell is NaN, idk if that will make sense. If it doesn't try removing below, and run and see your dataframe, than compare with your excel sheet.
    i=0
    # pd.isna is a function that checks if a variable in our dataframe is NaN. So we keep trying until we find the first one with the label.
    while(pd.isna(df.loc[index,'KUTU'])):
        # iterate so we can try again in case if it's needed
        i+=1
        # assign the previous label to this. If that is also NaN then try again with one before that.
        # print(f'i is: {i}, and df.shape[0] is {df.shape[0]}')
        df.loc[index,'KUTU'] = df.loc[index-i,"KUTU"]

    # exclude data entries that are unkown
    if row['KUTU'] == '*' or row['ÖLÇÜ'] == '*' or row['RENK']=='*':
        rows_to_drop.append(index)
# ---------------- Drop the rows. Data cleaning is completed  ------------------
rows_to_drop.append(df.shape[0]-1) #dropping the last row because it is just total stuff
df = df.drop(rows_to_drop)
print(' ---------------- Data Cleaning Process is Completed ----------------')
# After data cleaning calculate the new number of rows
after_drop_num_rows = df.shape[0]
print(f'Cleaned dataset has {after_drop_num_rows} number of rows.')


# Now let's fix the label of the designs 1370 and 48060. Because they have multiple values for the same data
for index, row in df.iterrows():
        # In the original excel file, 1370 has both White and Cream colors, this eliminates it to only Cream.
    if (row['DESEN'] == "1370"):
        df.loc[index,"RENK"] = "KREM"
        # In original one, 48060 has both D White and Cream colors, this eliminates it to only Cream.
    if (row['DESEN'] == "48060" and row["RENK"] == "KREM"):
        df.loc[index, "RENK"] = "D BEYAZ"
    # Let's print what we have
    print(f"Row {index}: Box = {row['KUTU']}, Design = {row['DESEN']}, Size = {row['ÖLÇÜ']}, Color = {row['RENK']}, Header = {row['ASMA TİPİ']}")


# let's initialize the total packages variable so we can compute in for loop
total_packages = df['KAP İÇİ SET ADET'].sum()
# let's initialize the total cost variable so we can compute in for loop. This is how much inventory we have in $
total_cost = df['FİYAT TOPLAM'].sum()
# get the total of distinct boxes
total_num_boxes = df['KUTU'].nunique()
    # let's print each row so we can see what we have in here
    # print(f"Row {index}: Box = {box}, Design = {design}, Size = {size}, Color = {color}, Header = {header}")

print('------------------------------------------------------------------------')
print(f'Number of total packages is: {total_packages}')
print(f'Total cost is: ${total_cost}')
print(f'Total number of boxes is: {total_num_boxes}')
print('------------------------------------------------------------------------')

# Below is for printing for each SKU
grouped = df.groupby(['DESEN',"ÖLÇÜ","RENK","ASMA TİPİ"])["KAP İÇİ SET ADET"].sum().reset_index()
print('----------now printing grouped----------')
print(grouped.to_string())

# Export to SKU summary to the csv file named SKU_summary
grouped.to_csv("SKU_summary.csv", index=False, encoding="utf-8-sig")
# sum_all_packages = grouped.iloc['ÖLÇÜ']
# print(f'number of total packages: {sum_all_packages}')